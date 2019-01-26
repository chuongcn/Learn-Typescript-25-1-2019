"use strict";
// Class & Enum
var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finish"] = 12] = "Finish";
})(state || (state = {}));
var congViec = /** @class */ (function () {
    function congViec(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    congViec.prototype.showThongTin = function () {
        return "ID: " + this.id + " - t\u00EAn :" + this.name + " - tr\u1EA1ng th\u00E1i: " + this.status;
    };
    return congViec;
}());
var congViec1 = new congViec(1, "Báo cáo tài chính", state.Finish);
console.log(congViec1.showThongTin());
//# sourceMappingURL=lesson09.js.map