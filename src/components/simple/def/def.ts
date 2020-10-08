export { iDestructible, iDef }

interface iDestructible {
  destroy(): void;
}
interface iDef {
  action(): void;
}
type ArrayOfDestructible = [() => void, ...Array<iDestructible>];

export class Def implements iDestructible, iDef {
  selfElement: Element;
  active: Element;

  private readonly bindedAction = this.action.bind(this);
  constructor(element: Element) {
    let temp = element.querySelector('.def__active');
    if (!temp) throw new ReferenceError(
      `not elem ".def__active" in tag: ${element.tagName} class: ${element.classList.toString}`);
    this.active = temp;

    this.selfElement = element;

    this.active.addEventListener('click', this.bindedAction);
  }
  action(){}
  destroy() {
    this.active.removeEventListener('click', this.bindedAction);
  }
}