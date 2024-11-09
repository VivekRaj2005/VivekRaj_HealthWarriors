export async function PromiseToJSON(promise: Promise<any>): Promise<Object> {
    const body: ReadableStream = await promise.then((response) => response.body);
    const reader: ReadableStreamDefaultReader = body.getReader(); // `ReadableStreamDefaultReader`
    const decoder: TextDecoder = new TextDecoder();
    const chunks: Array<String> = [];
  
    async function read() {
      const { done, value } = await reader.read();
  
      // all chunks have been read?
      if (done) {
        return JSON.parse(chunks.join(""));
      }
  
      const chunk: string = decoder.decode(value, { stream: true });
      chunks.push(chunk);
      return read(); // read the next chunk
    }
  
    return read();
  }
  
  export async function BufferToJSON(body: ReadableStream): Promise<Object> {
    const reader: ReadableStreamDefaultReader = body.getReader();
    const decoder: TextDecoder = new TextDecoder();
    const chunks: Array<string> = [];
  
    async function read() {
      const { done, value } = await reader.read();
  
      // all chunks have been read?
      if (done) {
        console.log(chunks.join(""));
        return JSON.parse(chunks.join(""));
      }
  
      const chunk = decoder.decode(value, { stream: true });
      chunks.push(chunk);
      return read(); // read the next chunk
    }
  
    return read();
  }
  
  export function dataURItoBlob(dataURI: String): Blob {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString: String = atob(dataURI.split(",")[1]);
  
    // separate out the mime component
    var mimeString: string = dataURI.split(",")[0].split(":")[1].split(";")[0];
  
    // write the bytes of the string to an ArrayBuffer
    var ab: ArrayBuffer = new ArrayBuffer(byteString.length);
  
    // create a view into the buffer
    var ia: Uint8Array = new Uint8Array(ab);
  
    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], { type: mimeString });
    return blob;
  }
  
  export async function blobToDataURL(blob: Blob): Promise<any> {
    let reader: FileReader = new FileReader()
    reader.readAsDataURL(blob)
    const data = await new Promise(resolve => reader.onload = function(){ resolve(reader.result?.toString()) })
    return data;
  }