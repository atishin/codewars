export class G964 {
    public static bouncingBall(h: number, bounce: number, window: number): number {
        if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
            return -1;
        }
        
        let bounces = 0;    
        while (true) {
            bounces ++;
            h *= bounce;
            if (h < window) {
                return bounces;
            } else {
                bounces ++;
            }
        }
    }
}

function testing(a, b, c, res) {
    if (G964.bouncingBall(a, b, c) == res) {
        console.log(true);

    } else {
        console.log(false, G964.bouncingBall(a, b, c))
    }
}

testing(3.0, 0.66, 1.5, 3);
testing(30.0, 0.66, 1.5, 15);
testing(30, 0.75, 1.5, 21);
testing(30, 0.4, 10, 3);