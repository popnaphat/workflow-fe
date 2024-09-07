type GreetingProps = {
    name: string;
    age: number;
    format?: string; 
  };
  
  const greeting = ({ name, age, format }: GreetingProps): string | void => {
    if (format === "Table") {
        
        console.table({ [name]: { value: age } });
        return;
    } else {
        console.log(`Hi ${name}. Your format is ${format}`);
        return;
    }
  };
  
  
  greeting({ name: "Alice", age: 18, format: "Table" })
  greeting({ name: "Bob", age: 18, format: "Default" })
  greeting({ name: "Charlie", age: 18 }) // Hi, Charlie
  greeting({ name: "Charlie", age: 18, format: "abc" }) // 🔴 typescript error, No console.log
  