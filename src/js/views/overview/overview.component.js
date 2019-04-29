import { view } from './overview.template';
import { view as profileView } from '../profile/profile.template';
import { view as expenditureView } from '../expenditure/expenditure.template';
import { view as merchantsView } from '../merchants/merchants.template';
import { view as faqView } from '../faq/faq.template';
import { view as transactionsView } from '../transactions/transactions.template';
import { Utils } from '../../utils/utils';

export class OverviewComponent {
    constructor() {
        this.data = {};
    }

    getData(callback) {
        Utils.getData('data/overview.json', function(data, err) {
            callback(data);
        });
    }

    template(component, data) {
        console.log(component, data);
        return view(data, {
            profileView: profileView,
            faqView: faqView,
            transactionsView: transactionsView,
            expenditureView: expenditureView,
            merchantsView: merchantsView,
        });
    }

    handlers() {}
}
