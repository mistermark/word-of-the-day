//== Magic happening

exports.noAccess = function(req, res) {
  res.json({"status": "error", "message": "You can't access the API from here. RTFM!"});
}
