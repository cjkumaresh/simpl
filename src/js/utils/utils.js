import $ from 'jquery';

export class Utils {
    static getFormData($form) {
        var unindexed_array = $form.serializeArray();
        return Utils.arrayToObject(unindexed_array);
    }

    static arrayToObject(unindexed_array) {
        var indexed_array = {};

        $.map(unindexed_array, function(n, i) {
            indexed_array[n['name']] = n['value'];
        });

        return indexed_array;
    }

    static getData(url, success) {
        $.ajax({
            dataType: 'json',
            url: url,
            success: success,
        });
    }
}
