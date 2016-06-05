const config = {}

config.dev = {
  debug: true,
}

config.production = {
  debug: false,
}

export default config[process.env] || config.dev
