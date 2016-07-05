//jshint esversion:6
const express = require('express');
const app = express().enable('trust proxy').get('/', (req, res) => {
                  res.json({
                      ipadress:req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                      language: req.headers['accept-language'].substr(0, 5),
                      software: req.headers['user-agent'].substring(req.headers['user-agent'].indexOf('(') + 1,
                                                                    req.headers['user-agent'].indexOf(')'))
                  });
            }).listen(process.env.PORT || 3000);
