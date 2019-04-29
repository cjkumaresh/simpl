import { OverviewComponent } from './views/overview/overview.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ExpenditureComponent } from './views/expenditure/expenditure.component';
import { FaqComponent } from './views/faq/faq.component';
import { MerchantsComponent } from './views/merchants/merchants.component';
import { TransactionsComponent } from './views/transactions/transactions.component';

import $ from 'jquery';

export class Router {
    constructor() {
        this.routes = {
            '': OverviewComponent,
            '#/': OverviewComponent,
            '#/overview': OverviewComponent,
            '#/transactions': TransactionsComponent,
            '#/profile': ProfileComponent,
            '#/merchants': MerchantsComponent,
            '#/help': FaqComponent,
        };

        this.route();
        this.navigate();
    }

    route() {
        window.onpopstate = () => {
            this.navigate();
        };

        $('#nav a').click(e => {
            const tabs = document.getElementById('nav').getElementsByClassName('header');
            for (let tab of tabs) {
                tab.classList.remove('active');
            }
            e.currentTarget.classList.add('active');
        });
    }

    navigate() {
        const component = new this.routes[window.location.hash]();
        component.getData(data => {
            this.render(component, component.template, data);
            this.handle(component, component.handlers);
        });
    }

    render(component, template, data) {
        $('#main')
            .html('')
            .append(template(component, data));
    }

    handle(component, handlers) {
        handlers(component);
    }
}
