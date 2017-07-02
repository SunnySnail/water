/**
 * FileName:   shopCart.js
 * Author:     Fasion Chan
 * @contact:   fasionchan@gmail.com
 * @version:   $Id$
 *
 * Description:
 *
 * Changelog:
 *
 **/

export function ShopCart() {
    this.sections = [];

    this.merchantMap = {};
    this.recordMap = {};
};

ShopCart.prototype = {
    constructor: ShopCart,

    push(record) {

        var cachedRecord = this.recordMap[record.id];
        if (cachedRecord) {
            cachedRecord.quantity += record.quantity;
            return cachedRecord;
        }

        var merchant = record.merchant;
        var cachedMerchant = this.merchantMap[merchant.id];
        if (!cachedMerchant) {
            this.merchantMap[merchant.id] = cachedMerchant = $.extend({
                'records': [],
            }, merchant);
            this.sections.push(cachedMerchant);
        }

        cachedMerchant.records.push(record);
        this.recordMap[record.id] = record;

        return record;
    },

    pop(record) {
        var cachedRecord = this.recordMap[record.id];
        if (!cachedRecord) {
            return;
        }

        delete this.recordMap[record.id];

        var merchant = cachedRecord.merchant;
        var cachedMerchant = this.merchantMap[merchant.id];
        if (!cachedMerchant) {
            return;
        }

        cachedMerchant.records = cachedMerchant.records.filter(item => item.id !== record.id);
        if (cachedMerchant.records.length) {
            return;
        }

        delete this.merchantMap[cachedMerchant.id];
        this.sections = this.sections.filter(item => item.id !== cachedMerchant.id)
    },

    set(record) {
        var cachedRecord = this.recordMap[record.id];
        if (cachedRecord) {
            cachedRecord.quantity = record.quantity;
            return cachedRecord;
        }

        return this.push(record);
    },
};
