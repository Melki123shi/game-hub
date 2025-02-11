import crypto from 'crypto';

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    + "-" + crypto.randomBytes(3).toString("hex");
}

export default generateSlug;
