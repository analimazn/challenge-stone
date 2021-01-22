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
    };
  };

  if (quantityEmails) {
    while (quantityEmails > 0) {
      const email = `email@${Math.floor(Math.random() * 100)}.com`;

      emails.push(email);
      quantityEmails--;
    };
  };

  const data = [{ [ITEMS]: items, [EMAILS]: emails }];
  return data;
};


function calculateItemsList(items) {
  const total = items.reduce((acc, item) => {
    acc+= item.quantity * item.price;
    return acc;
  }, 0);

  return total
};


function divideItemsList(total, emails) {
  const division = Math.floor(total / emails.length);
  let rest = total - (division * emails.length);

  const distributeDivision = emails.map(email => {
    return { [email]: division };
  });

  while (rest > 0) {
    const key = Object.keys(distributeDivision[rest])[0];
    distributeDivision[rest][key]++;
    rest--;
  };

  return distributeDivision;
};


function processItemsList(data) {
  try {
    if ((Array.isArray(data) && !data.length) ||
      (data[0].items && !data[0].items.length) ||
      (data[0].emails && !data[0].emails.length)) {
        throw "Your list of items or emails is empty";
    };
  
    const total = calculateItemsList(data[0].items);
  
    if (total === 0) {
      throw "Your list of items can't be divided, result is zero";
    };
  
    const result = divideItemsList(total, data[0].emails);
    return result;

  } catch (err) {
    throw err;
  }
};


module.exports = {
  createItemsList,
  calculateItemsList,
  divideItemsList,
  processItemsList
};
