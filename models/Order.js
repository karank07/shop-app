import moment from 'moment';

class Order {
    constructor(id, items, amount, date) {
        this.id = id;
        this.items = items;
        this.amount = amount;
        this.date = date;
    }

    get readDate() {
        return moment(this.date).format('MMMM Do YYYY, hh:mm');
    }
};

export default Order;