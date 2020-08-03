import VMParent from "../modelView/VMParent";



const { ccclass, property } = cc._decorator;

@ccclass
export default class DemoVMParent extends VMParent {

    data = {
        a: 1,
        b: 0,
        c: 0,
        d: 2,

    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {
        this.data.a += 1;
        this.data.d = this.data.a;
        if (this.data.a >= 60) {
            this.data.b += 1;
            this.data.a = 0;
        }

        if (this.data.b >= 60) {
            this.data.c += 1;
            this.data.b = 0;

        }
    }
}
