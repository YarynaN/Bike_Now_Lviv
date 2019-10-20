const admin = require('firebase-admin');
export const app = require('express')();

// @ts-ignore-file
app.get('/api/bike-photo/:uid', (req, res) => {
  admin.database()
    .ref(`/bikes/${req.params.uid}`)
    .once('value')
    // @ts-ignore
    .then(snapshot => {
      const bike = snapshot.val();
      const image = (bike.images && bike.images[0]) || '';
      const base64String = image;
      const base64Image = base64String.split(';base64,').pop();
      const imageBuffer = new Buffer(base64Image, 'base64');
      res.setHeader('Cache-Control', 'public, max-age=2592000')
      if(base64String.startsWith('data:image/png'))
        res.contentType('image/png');
      else
        res.contentType('image/jpeg');
      res.end(imageBuffer);
      res.end(imageBuffer, 'binary');
    });
});
