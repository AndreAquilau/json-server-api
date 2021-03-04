module.exports = {
  presets: [
    [
      '@babel/preset-env', {
      targets: {
        node: 'current',
      }
    }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver', {
        alias: {},
      }
    ]
  ],
  ignore: ['/src/**/*.spec.ts', '/src/**/*.test.ts']
}
