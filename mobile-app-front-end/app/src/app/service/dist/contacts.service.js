"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactService = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var minima_1 = require("minima");
var core_1 = require("@angular/core");
var SparkMD5 = require("spark-md5");
var ContactService = /** @class */ (function () {
    function ContactService() {
        this.data = new rxjs_1.ReplaySubject(1);
        this.selectedAddress = new rxjs_1.ReplaySubject(1);
        this.initSQL();
    }
    ContactService.prototype.initSQL = function () {
        var _this = this;
        this.qContacts = 'CREATE TABLE IF NOT EXISTS contacts (' +
            'address varchar(255) PRIMARY KEY,' +
            'name varchar(255),' +
            'description varchar(255),' +
            'avatar varchar(255))';
        minima_1.Minima.sql(this.qContacts + ';SELECT * FROM contacts ORDER BY NAME', function (res) {
            // console.log(res);
            if (minima_1.Minima.util.checkAllResponses(res)) {
                _this.data.next(res.response[1].rows);
            }
        });
    };
    ContactService.prototype.createIcon = function (address) {
        return 'https://www.gravatar.com/avatar/' + SparkMD5.hash(address) + '?d=identicon';
    };
    ContactService.prototype.loadContacts = function () {
        return this.data.pipe(operators_1.take(1))
            .toPromise();
    };
    ContactService.prototype.addContact = function (newContact) {
        var _this = this;
        if (newContact.AVATAR.length === 0) {
            newContact.AVATAR = this.createIcon(newContact.ADDRESS);
        }
        if (newContact.NAME.length === 0) {
            newContact.NAME = 'Anonymous';
            this.qContacts = "INSERT INTO contacts VALUES(" +
                "'" + newContact.ADDRESS + "'," +
                "'" + newContact.NAME + "'," +
                "'" + newContact.DESCRIPTION + "'," +
                "'" + newContact.AVATAR + "')";
        }
        else {
            this.qContacts = "INSERT INTO contacts VALUES(" +
                "'" + newContact.ADDRESS + "'," +
                "'" + newContact.NAME.replace("'", "''") + "'," +
                "'" + newContact.DESCRIPTION + "'," +
                "'" + newContact.AVATAR + "')";
        }
        minima_1.Minima.sql(this.qContacts + ';SELECT * FROM CONTACTS ORDER BY NAME', function (res) {
            // console.log(res);
            if (res.status && res.response[0].status) {
                _this.data.next(res.response[1].rows ? res.response[1].rows : []);
            }
        });
    };
    ContactService.prototype.deleteContacts = function () {
        var _this = this;
        minima_1.Minima.sql('DELETE FROM CONTACTS', function (res) {
            if (res.status) {
                _this.data.next(res.response.rows);
            }
        });
    };
    ContactService.prototype.removeContact = function (address) {
        var _this = this;
        minima_1.Minima.sql('DELETE FROM CONTACTS WHERE ADDRESS=\'' + address + '\';SELECT * FROM CONTACTS', function (res) {
            if (minima_1.Minima.util.checkAllResponses(res)) {
                // update data observable
                _this.data.next(res.response[1].rows ? res.response[1].rows : []);
            }
        });
    };
    ContactService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
