const router = require('express').Router();

const productsData = require('./productsData.js')
const barsData = require('./barsData.js')

router.get('/bars', function(req, res) {
  let result = [];
  if (req.query.location) {
    result = [{
      id: 5,
      name: "Cloisters Bar",
      lat: 55.9432624,
      long: -3.2107057,
      image_url: "https://lh5.googleusercontent.com/-XpI50JzpRug/UFs9Fz493zI/AAAAAAAAQKQ/Pud2p6KwLzYcrNNs2mSwb_B3PCvh7YyLQCJkC/w160-h184-p-k-no/"
    },{
      id: 8,
      name: "Blue Blazer",
      lat: 55.945942,
      long: -3.2053387,
      image_url: "https://lh3.googleusercontent.com/--PVUZuR2JG8/VzHHbMYaTvI/AAAAAAAAADE/6FTK5x3Kwo8TQeDKo8QY4Q_eSVWA2Yh9wCJkC/w160-h184-p-k-no/"
    },{
      id: 4,
      name: "Bennets Bar",
      lat: 55.941731,
      long: -3.2120178,
      image_url: "https://lh5.googleusercontent.com/-IqgRrXlxDLI/VX7cfy1LFII/AAAAAAAAAA0/iqL3kWyra6UkXC0DP9eNmMD4QumhzCTLACJkC/w160-h184-p-k-no/"
    }];
  } else if (req.query.search) {
    const pattern = req.query.search
    result = barsData.filter((item) => {
      return item.name.toLowerCase().startsWith(pattern.toLowerCase())
    })
  }

  res.json({
    data: result
  });
});

router.get('/bars/:barId/products', function(req, res) {
  res.json({
    data: productsData
  });
})

router.get('/bars/:barId/history', function(req, res) {
  res.json({
    data: [{
      id: 1120921,
      bar_id: 1,
      ordered_at: 1486936031375,
      total: 27.7
    },{
      id: 2323198,
      bar_id: 1,
      ordered_at: 1486938134586,
      total: 25.3
    }]
  });
})

router.post('/bars/:barId/history', function(req, res) {
  const data = req.body
  data.id = Math.round(Math.random() * 1000)
  res.json(data)
})

module.exports = router