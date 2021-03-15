import swal from 'sweetalert2';

import { isMobile } from '@common/kintone';
import { getPluginConfig } from '@common/plugin';

/**
 * プラグインを実行するイベントを返却します
 * @param pluginId プラグインID
 * @returns プラグインを実行するイベント
 */
const events = (pluginId: string) => {
  const config = getPluginConfig(pluginId);

  const targets = ['app.record.create.submit.success'];

  if (config.enablesUpdate) {
    targets.push('app.record.edit.submit.success');
  }

  return targets;
};

/**
 * プラグインで実行される処理を返却します
 * @param event Kintoneイベント
 * @param pluginId プラグインID
 * @returns プラグインで実行される処理
 */
const action: PluginAction = async (event, pluginId) => {
  const recordId = event.recordId;

  const config = getPluginConfig(pluginId);

  const input = await swal.fire({
    icon: 'success',
    title: '更新成功',
    text: 'レコードの更新に成功しました',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: '続けて入力する',
    cancelButtonText: '完了',
  });

  let url = location.pathname;

  // 選択肢によって、遷移先を変更します
  if (input.isConfirmed) {
    event.url = url;

    if (config.reuses) {
      event.url += `?record=${recordId}`;
      if (isMobile(event.type)) {
        event.url += '&reuse=true';
      }
    }
  }

  return event;
};

export default { action, events };
