'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Play, Pause, RotateCcw, Truck } from 'lucide-react'

interface GameState {
  score: number
  level: number
  lives: number
  isPlaying: boolean
  isPaused: boolean
}

export default function TrafficWeavingGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    level: 1,
    lives: 3,
    isPlaying: false,
    isPaused: false
  })

  const [highScore, setHighScore] = useState(() => {
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem('motogar-high-score') || '0')
    }
    return 0
  })

  const updateHighScore = useCallback((score: number) => {
    if (score > highScore) {
      setHighScore(score)
      if (typeof window !== 'undefined') {
        localStorage.setItem('motogar-high-score', score.toString())
      }
    }
  }, [highScore])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Game variables
    let animationId: number
    const player = { x: canvas.width / 2, y: canvas.height - 50, width: 30, height: 20 }
    const obstacles: Array<{x: number, y: number, width: number, height: number, speed: number}> = []
    const powerUps: Array<{x: number, y: number, radius: number, speed: number}> = []
    const keys = { left: false, right: false }

    // Game functions
    const drawPlayer = () => {
      ctx.fillStyle = '#ff6b35'
      ctx.fillRect(player.x - player.width/2, player.y - player.height/2, player.width, player.height)

      // Draw motorcycle details
      ctx.fillStyle = '#ffd23f'
      ctx.fillRect(player.x - 5, player.y - 15, 10, 5) // Headlight
    }

    const drawObstacle = (obs: {x: number, y: number, width: number, height: number, speed: number}) => {
      ctx.fillStyle = '#dc2626'
      ctx.fillRect(obs.x - obs.width/2, obs.y - obs.height/2, obs.width, obs.height)

      // Draw car details
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(obs.x - obs.width/2 + 5, obs.y - obs.height/2 + 5, 8, 6) // Window
      ctx.fillRect(obs.x + obs.width/2 - 13, obs.y - obs.height/2 + 5, 8, 6) // Window
    }

    const drawPowerUp = (pu: {x: number, y: number, radius: number, speed: number}) => {
      ctx.fillStyle = '#10b981'
      ctx.beginPath()
      ctx.arc(pu.x, pu.y, pu.radius, 0, Math.PI * 2)
      ctx.fill()

      // Draw star symbol
      ctx.fillStyle = '#ffffff'
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('★', pu.x, pu.y + 4)
    }

    const createObstacle = () => {
      const lane = Math.floor(Math.random() * 3) // 3 lanes
      const x = (lane + 1) * (canvas.width / 4)
      obstacles.push({
        x,
        y: -20,
        width: 25,
        height: 40,
        speed: 2 + gameState.level * 0.5
      })
    }

    const createPowerUp = () => {
      if (Math.random() < 0.1) { // 10% chance
        const lane = Math.floor(Math.random() * 3)
        const x = (lane + 1) * (canvas.width / 4)
        powerUps.push({
          x,
          y: -20,
          radius: 10,
          speed: 1.5
        })
      }
    }

    const updateGame = () => {
      if (!gameState.isPlaying || gameState.isPaused) return

      // Move player
      if (keys.left && player.x > player.width/2) {
        player.x -= 5
      }
      if (keys.right && player.x < canvas.width - player.width/2) {
        player.x += 5
      }

      // Update obstacles
      obstacles.forEach((obs, index) => {
        obs.y += obs.speed

        // Check collision with player
        if (Math.abs(obs.x - player.x) < (obs.width + player.width)/2 &&
            Math.abs(obs.y - player.y) < (obs.height + player.height)/2) {
          setGameState(prev => ({
            ...prev,
            lives: prev.lives - 1,
            isPlaying: prev.lives > 1
          }))
          obstacles.splice(index, 1)
        }

        // Remove off-screen obstacles
        if (obs.y > canvas.height + 20) {
          obstacles.splice(index, 1)
          setGameState(prev => {
            const newScore = prev.score + 10
            updateHighScore(newScore)
            return { ...prev, score: newScore }
          })
        }
      })

      // Update power-ups
      powerUps.forEach((pu, index) => {
        pu.y += pu.speed

        // Check collision with player
        const distance = Math.sqrt((pu.x - player.x) ** 2 + (pu.y - player.y) ** 2)
        if (distance < pu.radius + player.width/2) {
          setGameState(prev => ({
            ...prev,
            score: prev.score + 50,
            lives: Math.min(prev.lives + 1, 5)
          }))
          powerUps.splice(index, 1)
        }

        // Remove off-screen power-ups
        if (pu.y > canvas.height + 20) {
          powerUps.splice(index, 1)
        }
      })

      // Spawn new obstacles and power-ups
      if (Math.random() < 0.02) createObstacle()
      createPowerUp()

      // Level up
      if (gameState.score > 0 && gameState.score % 500 === 0) {
        setGameState(prev => ({ ...prev, level: prev.level + 1 }))
      }
    }

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = '#0a0a0a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw road
      ctx.fillStyle = '#2a2a2a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw lane dividers
      ctx.strokeStyle = '#ffffff'
      ctx.setLineDash([10, 10])
      for (let i = 1; i < 4; i++) {
        ctx.beginPath()
        ctx.moveTo(i * canvas.width / 4, 0)
        ctx.lineTo(i * canvas.width / 4, canvas.height)
        ctx.stroke()
      }
      ctx.setLineDash([])

      // Draw player
      drawPlayer()

      // Draw obstacles
      obstacles.forEach(drawObstacle)

      // Draw power-ups
      powerUps.forEach(drawPowerUp)

      // Draw UI
      ctx.fillStyle = '#ffffff'
      ctx.font = '16px Arial'
      ctx.textAlign = 'left'
      ctx.fillText(`Score: ${gameState.score}`, 10, 30)
      ctx.fillText(`Level: ${gameState.level}`, 10, 50)
      ctx.fillText(`Lives: ${'❤️'.repeat(gameState.lives)}`, 10, 70)

      if (gameState.isPaused) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = '#ffffff'
        ctx.font = '24px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('PAUSED', canvas.width / 2, canvas.height / 2)
      }
    }

    const gameLoop = () => {
      updateGame()
      draw()
      animationId = requestAnimationFrame(gameLoop)
    }

    // Event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a') keys.left = true
      if (e.key === 'ArrowRight' || e.key === 'd') keys.right = true
      if (e.key === ' ') {
        e.preventDefault()
        setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }))
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a') keys.left = false
      if (e.key === 'ArrowRight' || e.key === 'd') keys.right = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    if (gameState.isPlaying && !gameState.isPaused) {
      gameLoop()
    } else {
      draw()
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      cancelAnimationFrame(animationId)
    }
  }, [gameState, updateHighScore])

  const startGame = () => {
    setGameState({
      score: 0,
      level: 1,
      lives: 3,
      isPlaying: true,
      isPaused: false
    })
  }

  const pauseGame = () => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }))
  }

  const resetGame = () => {
    setGameState({
      score: 0,
      level: 1,
      lives: 3,
      isPlaying: false,
      isPaused: false
    })
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold moto-gradient-text mb-4">משחק Traffic Weaving</h2>
            <p className="text-xl text-gray-300 mb-6">
              התחמק ממכוניות, אסוף כוכבים וצבר נקודות!
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-400">
              <span>← → או A/D להזזה</span>
              <span>Space להשהיה</span>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Canvas */}
          <div className="lg:col-span-2">
            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
              <CardContent className="p-6">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={400}
                  className="game-canvas w-full max-w-full"
                />
              </CardContent>
            </Card>
          </div>

          {/* Game Controls & Stats */}
          <div className="space-y-6">
            {/* Controls */}
            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-xl moto-gradient-text">פקדים</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!gameState.isPlaying ? (
                  <Button onClick={startGame} className="w-full neon-glow">
                    <Play className="w-4 h-4 ml-2" />
                    התחל משחק
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Button onClick={pauseGame} variant="outline" className="w-full">
                      <Pause className="w-4 h-4 ml-2" />
                      {gameState.isPaused ? 'המשך' : 'השהה'}
                    </Button>
                    <Button onClick={resetGame} variant="outline" className="w-full">
                      <RotateCcw className="w-4 h-4 ml-2" />
                      התחל מחדש
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-xl moto-gradient-text">סטטיסטיקות</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">ניקוד נוכחי:</span>
                  <span className="text-orange-400 font-bold">{gameState.score}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">שיא:</span>
                  <span className="text-yellow-400 font-bold">{highScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">רמה:</span>
                  <span className="text-purple-400 font-bold">{gameState.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">חיים:</span>
                  <span className="text-red-400 font-bold">{gameState.lives}</span>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-xl moto-gradient-text">איך לשחק</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>• השתמש בחצים או A/D כדי לזוז</p>
                <p>• התחמק מהמכוניות האדומות</p>
                <p>• אסוף כוכבים ירוקים לחיים נוספים</p>
                <p>• צבר נקודות וטפס רמות</p>
                <p>• לחץ Space כדי להשהות</p>
              </CardContent>
            </Card>

            {/* MotoGrar Branding */}
            <Card className="bg-linear-to-br from-orange-500/10 to-red-500/10 border-orange-500/30">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-bold moto-gradient-text">MotoGrar</p>
                <p className="text-xs text-gray-400">גיא נגר - 052-482-3435</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}