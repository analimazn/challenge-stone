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
      const email = `email@${Math.floor(Math.random() * 100)}.com`;

      emails.push(email);
      quantityEmails--;
    }
  }

  const data = { [ITEMS]: items, [EMAILS]: emails };
  return data;
}

function calculateItemsList(items) {
  const total = items.reduce((acc, item) => {
    acc+= item.quantity * item.price;
    return acc;
  }, 0);

  return total
}

function divideItemsList(total, emails) {
  const division = Math.floor(total / emails.length);
  const rest = total - (division * emails.length);
  const emailsToDivide = emails[rest];
  console.log(emailsToDivide)
  return
}

function processItemsList(data) {
  if (!data.items.length || !data.emails.length) {
    return "Sua lista de emails e/ou itens está vazia";
  }

  const total = calculateItemsList(data.items);

  if (total === 0) {
    return "Sua lista de itens não pode ser dividida";
  }

  const result = divideItemsList(total, data.emails)

  return
}

module.exports = {
  createItemsList,
  processItemsList
}
