function createItemsList(quantityItems, quantityEmails) {
  const ITEMS = 'items';
  const EMAILS = 'emails';

  const items = [];
  const emails = [];

  if (quantityItems) {
    while (quantityItems > 0) {
      const item = {
        item: `item${Math.floor(Math.random() * 100)}`,
        quantity: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 100)
      };

      items.push(item);
      quantityItems--;
    }
  }

  if (quantityEmails) {
    while (quantityEmails > 0) {
      const email = `email@${Math.floor(Math.random() * 100)}.com`

      emails.push(email);
      quantityEmails--;
    }
  }

  const data = { [ITEMS]: items, [EMAILS]: emails };
  return data;
}

function calculateItemsList() {

  return
}

function divideItemsList() {
  return
}

module.exports = {
  createItemsList,
  calculateItemsList,
  divideItemsList
}
