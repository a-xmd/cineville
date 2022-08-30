const { access, mkdir } = require('fs/promises')
const sharp = require('sharp')

;(async () => {
  const FILMNAME = 'for-sama'

  const filmsDir = 'public/static/images/films'
  const outputDir = `${filmsDir}/${FILMNAME}`

  const getOutputPath = (size) => `${outputDir}/${FILMNAME}-${size}.jpg`

  try {
    // check if directory exists
    const x = await access(outputDir)
  } catch (err) {
    // don't swallow real errors. if dir does not exist,
    // create the dir

    if (err.code !== 'ENOENT') {
      throw err
    }
    await mkdir(outputDir)
  }

  const imagePath = `images/films/${FILMNAME}.jpg`

  try {
    for (const size of [480, 768, 1152, 1440]) {
      await sharp(imagePath).resize(size).toFile(getOutputPath(size))
    }

    console.log(`🎉 resizing done!`)
  } catch (err) {
    console.log(err)
  }
})()
