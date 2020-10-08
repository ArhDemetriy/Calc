export { iDestructible, icomplicatedDef }

interface iDestructible {
  destroy(): void;
}
interface icomplicatedDef {
  action(): void;
}
type ArrayOfDestructible = [() => void, ...Array<iDestructible>];

export class complicatedDef implements iDestructible, icomplicatedDef {
  selfElement: Element;
  active: Element;

  private readonly bindedAction = this.action.bind(this);
  constructor(element: Element) {
    let temp = element.querySelector('.complicatedDef__active');
    if (!temp) throw new ReferenceError(
      `not elem ".complicatedDef__active" in tag: ${element.tagName} class: ${element.classList.toString}`);
    this.active = temp;

    this.selfElement = element;

    this.active.addEventListener('click', this.bindedAction);
  }
  action(){}
  destroy() {
    this.active.removeEventListener('click', this.bindedAction);
  }
}