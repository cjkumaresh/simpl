import { view } from './profile.template.js';
import { Utils } from '../../utils/utils';

export class ProfileComponent {
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
        return view(data);
    }

    handlers() {}
}
