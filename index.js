
const { readFile, writeFile } = require('fs')

const fsPromises = require('fs').promises

const fileOps = async ()=>{
  try {
    const data = await fsPromises.readFile('./content/first.txt', 'utf8')
    console.log(data)
    await fsPromises.writeFile('./content/second.txt', `Salam ${data}`)

    const result = await fsPromises.readFile('./content/second.txt', 'utf8')

    console.log(`The result : ${result}`)

    await fsPromises.appendFile('./content/first.txt', 'Go home')

    console.log('Append works')

    await fsPromises.rename('./content/second.txt', './content/aud-second.txt')

    console.log('Renaming works as well')
    
  } catch (err) {
    throw err
    
  }
}

fileOps()
/*
readFile('./content/first.txt', 'utf8', (err, result)=>{
  if(err) throw err

  const first = result

  readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err) throw err 
    const second = result

    writeFile('./content/result-async.txt', `Go home : ${first}, ${second}`, {flag: 'a'}, (err)=>{
      if (err) throw err
      console.log('Aue...')
    })
  })

})
*/

process.on('uncaughtException', err =>{
  console.log(err)
  process.exit(1)
})