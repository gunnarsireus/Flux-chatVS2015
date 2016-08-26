module.exports = {
    entry: [
        //'./src/actions/ChatMessageActionCreators.js',
        //'./src/actions/ChatServerActionCreators.js',
        //'./src/actions/ChatThreadActionCreators.js',
        ////'./src/components/ChatApp.jsx',
        ////'./src/components/MessageComposer.react.js',
        ////'./src/components/MessageListItem.react.js',
        ////'./src/components/MessageSection.react.js',
        ////'./src/components/ThreadListItem.react.js',
        ////'./src/components/ThreadSection.react.js',
        //'./src/constants/ChatConstants.js',
        //'./src/dispatcher/ChatAppDispatcher.js',
        //'./src/stores/MessageStore.js',
        //'./src/stores/ThreadStore.js',
        //'./src/stores/UnreadThreadStore.js',
        //'./src/utils/ChatMessageUtils.js',
        //'./src/utils/ChatWebAPIUtils.js',
        ////'./src/app.jsx',
        //'./src/ChatExampleData.js'
    ],
    output: {
        filename: './Scripts/app/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
          {
              test: /\. jsx?$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                  cacheDirectory: true,
                  presets: ['react', 'es2015']
              }
          }
        ]
    }
}