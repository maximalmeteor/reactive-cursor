Meteor.startup ->
  if Meteor.isServer
    testCollection = new Mongo.Collection 'tests'

    Tinytest.addAsync 'ReactiveCursor', (test, next) ->
      testCollection.remove {}
      runs = 0
      interval = null

      Tracker.autorun ->
        count = testCollection.find({}, reactive: true).count()
        test.equal count, runs

        if runs >= 3
          @stop()
          Meteor.clearInterval interval
          next()
        runs++

      interval = Meteor.setInterval ->
        testCollection.insert name: 'test'
      , 1000
