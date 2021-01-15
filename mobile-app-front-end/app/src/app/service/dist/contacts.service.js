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
        this.data = new rxjs_1.ReplaySubject();
        this.qContacts = 'CREATE TABLE IF NOT EXISTS contacts (' +
            'address varchar(255) PRIMARY KEY,' +
            'name varchar(255),' +
            'description varchar(255),' +
            'avatar varchar(255))';
        minima_1.Minima.sql(this.qContacts + ';SELECT * FROM contacts', function (res) {
            if (minima_1.Minima.util.checkAllResponses(res)) {
                console.log(res);
            }
        });
    }
    ContactService.prototype.loadContacts = function () {
        this.qContacts = 'SELECT * FROM contact';
        minima_1.Minima.sql(this.qContacts, function (res) {
            if (res.status) {
                console.log(res);
            }
        });
    };
    ContactService.prototype.addContact = function (address, name, description, avatar) {
        if (name.length === 0) {
            name = 'Anonymous';
            this.qContacts = 'INSERT INTO contacts VALUES(' +
                '"' + address + '",' +
                '"' + name + '",' +
                '"' + description + '",' +
                '"' + avatar + '")';
        }
        else {
            this.qContacts = 'INSERT INTO contacts VALUES(' +
                '"' + address + '",' +
                '"' + name + '",' +
                '"' + description + '",' +
                '"' + avatar + '")';
        }
        minima_1.Minima.sql(this.qContacts, function (res) {
            if (res.status) {
                console.log('Added new contact to SQL');
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
