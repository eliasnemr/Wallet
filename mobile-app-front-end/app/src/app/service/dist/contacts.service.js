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
var minima_1 = require("minima");
var core_1 = require("@angular/core");
var ContactService = /** @class */ (function () {
    function ContactService() {
        var _this = this;
        this.data = new rxjs_1.ReplaySubject(1);
        this.qContacts = 'CREATE TABLE IF NOT EXISTS contacts (' +
            'address varchar(255) PRIMARY KEY,' +
            'name varchar(255),' +
            'description varchar(255),' +
            'avatar varchar(255))';
        minima_1.Minima.sql(this.qContacts + ';SELECT * FROM contacts', function (res) {
            if (minima_1.Minima.util.checkAllResponses(res)) {
                _this.data.next(res.response[1].rows);
            }
        });
    }
    ContactService.prototype.loadContacts = function () {
        this.data.subscribe(function (val) {
            return val;
        });
        return null;
    };
    ContactService.prototype.addContact = function (newContact) {
        var _this = this;
        console.log(newContact.NAME);
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
                "'" + newContact.NAME + "'," +
                "'" + newContact.DESCRIPTION + "'," +
                "'" + newContact.AVATAR + "')";
        }
        console.log("Bout to Post to SQL");
        minima_1.Minima.sql(this.qContacts + ';SELECT * FROM CONTACTS', function (res) {
            console.log(res);
            if (res.status && res.response[0].status) {
                _this.data.next(res.response[1].rows);
            }
        });
    };
    ContactService.prototype.removeContact = function (address) {
    };
    ContactService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
