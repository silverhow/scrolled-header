interface dataInterface {
  target: HTMLElement,
  offset?: number,
  className?: string
}

export default class Header {
  target = null;
  offset;
  className;
  scroller = 0;
  toggler = false;

  constructor({target, offset = 50, className = "scrolled"}: dataInterface) {
    if (!target) throw new Error("The Header Element is required");
    this.target = target;
    this.offset = offset;
    this.className = className;
    this.scroller = 0;
    this.toggler = false;

    if (this.target) {
      this.toggle();
      window.addEventListener("scroll", () => this.toggle());
    }

  }

  toggle() {
    let oldScroller = this.scroller;
    this.scroller = document.documentElement.scrollTop;
    if (oldScroller > this.scroller) {
      if (this.toggler) {
        this.target.classList.remove(this.className);
        this.toggler = false;
      }
    } else {
      if (this.scroller > this.offset && !this.toggler) {
        this.target.classList.add(this.className);
        this.toggler = true;
      } else if (this.scroller <= this.offset && this.toggler) {
        this.target.classList.remove(this.className);
        this.toggler = false;
      }
    }
  }
}
