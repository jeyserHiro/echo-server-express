const { spawn } = require('child_process')

const startProcess = (proc) => {
  proc.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  proc.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  proc.on('error', (error) => {
    console.log(`error: ${error.message}`)
  })

  proc.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
  })
}

const npmConcurrent = () => spawn('npm', ['run', 'concurrent'])
const npmStart = () => spawn('npm', ['start'])
const npmDev = () => spawn('npm', ['run', 'dev'])

function main() {
  // npmConcurrent()
  // npmDev()
  let proc = npmStart()
  proc = npmConcurrent()
  startProcess(proc)
}
main()
