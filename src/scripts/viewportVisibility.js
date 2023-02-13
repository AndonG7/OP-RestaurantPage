export function checkVisibility (element) {
        var position = element.getBoundingClientRect();
        // checking whether fully visible
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            console.log('Element is fully visible in screen');
            return true;
        } else return false;
} 