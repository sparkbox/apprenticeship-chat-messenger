/* eslint-disable no-alert */
import main from './app';

main().catch((error) => {
  alert('Server Connection Failed!');
  console.log(error);
});
