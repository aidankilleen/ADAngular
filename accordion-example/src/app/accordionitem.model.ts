export class AccordionItem {

    public title: string;
    public text: string;
    public expanded: boolean;

    constructor(title: string, text: string, expanded: boolean = false) {
        this.title = title;
        this.text = text;
        this.expanded = expanded;
    }

    doSomething(value: string = "default value", 
                optionalParameter ?: string): string {
        return `some value ${value} ${optionalParameter}`;
    }
}