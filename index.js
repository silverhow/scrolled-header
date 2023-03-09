"use strict";
exports.__esModule = true;
var Header = /** @class */ (function () {
    function Header(_a) {
        var target = _a.target, _b = _a.offset, offset = _b === void 0 ? 50 : _b, _c = _a.className, className = _c === void 0 ? "scrolled" : _c;
        var _this = this;
        this.target = null;
        this.scroller = 0;
        this.toggler = false;
        if (!target)
            throw new Error("The Header Element is required");
        this.target = target;
        this.offset = offset;
        this.className = className;
        this.scroller = 0;
        this.toggler = false;
        if (this.target) {
            this.toggle();
            window.addEventListener("scroll", function () { return _this.toggle(); });
        }
    }
    Header.prototype.toggle = function () {
        var oldScroller = this.scroller;
        this.scroller = document.documentElement.scrollTop;
        if (oldScroller > this.scroller) {
            if (this.toggler) {
                this.target.classList.remove(this.className);
                this.toggler = false;
            }
        }
        else {
            if (this.scroller > this.offset && !this.toggler) {
                this.target.classList.add(this.className);
                this.toggler = true;
            }
            else if (this.scroller <= this.offset && this.toggler) {
                this.target.classList.remove(this.className);
                this.toggler = false;
            }
        }
    };
    return Header;
}());
exports["default"] = Header;
