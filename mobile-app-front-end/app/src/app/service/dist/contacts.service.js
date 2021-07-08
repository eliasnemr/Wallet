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
        this.duplicateError = 'org.h2.jdbc.JdbcSQLIntegrityConstraintViolationException: Unique index or primary key violation';
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
        return new Promise(function (resolve) {
            try {
                minima_1.Minima.sql(_this.qContacts +
                    ';SELECT * FROM CONTACTS ORDER BY NAME', function (res) {
                    // console.log(res);
                    if (res.status && res.response.length === 1) {
                        // It failed
                        if (!res.response[0].status &&
                            res.response[0].message.substring(0, 95) ===
                                _this.duplicateError) {
                            resolve('Duplicate');
                        }
                        else if (!res.response[0].status &&
                            res.response[0].message.substring(0, 95) !==
                                _this.duplicateError) {
                            resolve(false);
                        }
                    }
                    else if (res.status && res.response.length === 2) {
                        // it worked
                        if (minima_1.Minima.util.checkAllResponses(res)) {
                            _this.data.next(res.response[1].rows ? res.response[1].rows : []);
                            resolve(true);
                        }
                    }
                    else if (!res.status) {
                        resolve(false);
                    }
                });
            }
            catch (err) {
                throw new Error('Contact not added.');
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
        minima_1.Minima.sql('DELETE FROM CONTACTS WHERE ADDRESS=\'' + address +
            '\';SELECT * FROM CONTACTS ORDER BY NAME', function (res) {
            if (minima_1.Minima.util.checkAllResponses(res)) {
                // update data observable
                _this.data.next(res.response[1].rows ? res.response[1].rows : []);
            }
        });
    };
    ContactService.prototype.updateDescription = function (description, address) {
        var _this = this;
        return new Promise(function (resolve) {
            try {
                minima_1.Minima.sql('UPDATE CONTACTS SET DESCRIPTION=\'' +
                    description +
                    '\' WHERE ADDRESS=\'' + address + '\';' +
                    'SELECT * FROM contacts ORDER BY NAME', function (res) {
                    // console.log(res);
                    if (minima_1.Minima.util.checkAllResponses(res)) {
                        if (res.response[0].status && res.response[0].update === 1) {
                            resolve(true);
                            if (res.response[1].status) {
                                _this.data.next(res.response[1].rows);
                            }
                        }
                        else {
                            resolve(false);
                        }
                    }
                    else {
                        throw new Error('Something went wrong');
                    }
                });
            }
            catch (err) {
                minima_1.Minima.log(err);
            }
        });
    };
    ContactService.prototype.updateAvatar = function (url, address, modal) {
        var _this = this;
        return new Promise(function (resolve) {
            try {
                minima_1.Minima.sql('UPDATE CONTACTS SET AVATAR=\'' +
                    url +
                    '\' WHERE ADDRESS=\'' + address + '\';' +
                    'SELECT * FROM contacts ORDER BY NAME', function (res) {
                    // console.log(res);
                    if (minima_1.Minima.util.checkAllResponses(res)) {
                        if (res.response[0].status && res.response[0].update === 1) {
                            resolve(true);
                            if (res.response[1].status) {
                                _this.data.next(res.response[1].rows);
                                modal.dismiss();
                            }
                        }
                        else {
                            resolve(false);
                        }
                    }
                    else {
                        throw new Error('Something went wrong');
                    }
                });
            }
            catch (err) {
                minima_1.Minima.log(err);
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
