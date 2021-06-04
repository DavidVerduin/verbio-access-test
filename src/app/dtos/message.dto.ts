interface MessageDTO {
  /**Can be "text" or "image" */
  type: String;
  /**If type is text, then this is informed */
  text: String;
  /**If type is image, then this is informed */
  url: String;
}

export default MessageDTO;