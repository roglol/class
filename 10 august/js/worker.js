self.addEventListener('message', function(e) {
    switch(e.data.type){
        case 'add':
            add.apply(this, e.data.nums);
        break;
        case 'sub':
            sub.apply(this, e.data.nums);
        break;
        case 'doLazy':
        for(let i = 0; i < 10000000000; i++) {}
            self.postMessage('doLazy');
        break;
    }
});

