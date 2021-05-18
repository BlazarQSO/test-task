import { message } from 'src/const/message/message';

export const f = () => {
    console.log(message);

    class MyClass {
        static id = 10;
    }
    console.log(MyClass.id);
}
