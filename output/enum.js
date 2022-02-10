"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["admin"] = 1] = "admin";
    Permission["user"] = "USER";
    Permission["readonly"] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.admin);
console.log(Permission.user);
console.log(Permission.readonly);
console.log(Permission[1]);
//# sourceMappingURL=enum.js.map