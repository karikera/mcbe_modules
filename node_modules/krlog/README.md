
## About this
This is made for @mcbe/console module
* It receive log
* It will keep log to memory
* It will fire log to event
* It can read keeped log
* It can use various log levels
* It can replace console.log
## Example

```ts
import krlog from 'krlog';

krlog.listener.on((level:krlog.Level, message:string)=>{
    // process log
});

// basic functions
krlog.verbose('verbose');
krlog.message('message');
krlog.warning('warning');
krlog.error('error');

// install to console.log
krlog.install();
console.log('message');
console.error('error');


for(const line of krlog.page.current())
{
    // read page
}

krlog.page.next(); // next page
krlog.page.previous(); // previous page
krlog.page.clear(); // clear all pages



```

