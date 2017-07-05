
var storeSchema = new Schema({
  "featured": {
    "word": String,
    "date": String
  }
});

var localStore = mongoose.model('localStore', storeSchema)
