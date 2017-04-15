export const greeting = 'Hello World';

export const characterAt = greeting[4];

export const greetingArray = greeting.split("")

export const begins = (str, char) => { 
    return str.charAt(0) === char;
  };
export const beginsInsensitive = (str, char) => { 
     return (str.charAt(0).toUpperCase() === char.toUpperCase());
   };
