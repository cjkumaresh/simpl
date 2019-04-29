import { OverviewComponent } from './views/overview/overview.component';
import { ProfileComponent } from './views/profile/profile.component';
import $ from 'jquery';

export class Router {
    constructor() {
        this.routes = {
            '': OverviewComponent,
            '#/': OverviewComponent,
            '#/overview': OverviewComponent,
            '#/transactions': OverviewComponent,
            '#/profile': ProfileComponent,
            '#/merchants': OverviewComponent,
            '#/help': OverviewComponent,
        };

        this.route();
        this.navigate();
    }

    route() {
        window.onpopstate = () => {
            this.navigate();
        };
    }

    navigate() {
        const component = new this.routes[window.location.hash]();
        component.getData(data => {
            this.render(component, component.template, data);
            this.handle(component, component.handlers);
        });
    }

    render(component, template, data) {
        $('#container')
            .html('')
            .append(template(component, data));
    }

    handle(component, handlers) {
        handlers(component);
    }
}
