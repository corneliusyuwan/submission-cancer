const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'submissionmlgc-yuwancornelius',
  keyFilename: `/home/yuwan/key-firestore.json`,
});

async function storeData(id, data) {
  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
