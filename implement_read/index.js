import http from 'http'
import fs from 'fs'
import { Readable } from 'stream'

let count = 0
var rs = Readable()

rs._read = async () => {
  await sleep(1000)
  if (count < 3) {
    rs.push('123')
    count++
  } else {
    console.log('over')
    rs.push(null)
  }
}

rs.pipe(process.stdout)

function sleep (t) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t)
  })
}
