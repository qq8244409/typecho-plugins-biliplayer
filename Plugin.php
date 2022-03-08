<?php
/**
 * 文章插入bilibili   
 * 感谢 <a href="https://9i3.cn" target="_blank">夏目贵志</a>
 * 问题反馈：<a href="https://www.taozi1.com/6645.html" target="_blank">https://www.taozi1.com/6645.html</a>
 *
 * @package biliplayer
 * @author  筷子
 * @version 1.0.8
 * @link 	https://www.taozi1.com
 * 
 */
class biliplayer_Plugin implements Typecho_Plugin_Interface
{
	/**
	 * 激活插件方法，如果激活失败，直接抛出异常
	 * 
	 * @access public
	 * @return void
	 * @throws Typecho_Plugin_Exception
	 * 
	 */
	public static function activate()
	{
		Typecho_Plugin::factory('Widget_Abstract_Contents')->excerptEx=array('biliplayer_Plugin','playparse');
		Typecho_Plugin::factory('Widget_Abstract_Contents')->contentEx=array('biliplayer_Plugin','playparse');
		Typecho_Plugin::factory('admin/write-post.php')->bottom = ['biliplayer_Plugin', 'biliButton'];
        Typecho_Plugin::factory('admin/write-page.php')->bottom = ['biliplayer_Plugin', 'biliButton'];
		Typecho_Plugin::factory('Widget_Archive')->header = ['biliplayer_Plugin', 'playerHeader'];
	}
	
	/**
	 * 禁用插件的方法，如果禁用失败，直接抛出异常
	 *
	 * @static
	 * @access public 
	 * @return void
	 * @throws Typecho_Plugin_Exception
	 * 
	 */
	public static function deactivate(){}
	
	/**
	 *获取插件配置面板 
	 * 
	 * @access public 
	 * @param  Typecho_Widget_Helper_Form $form 配置面板
	 * @return void 
	 * 
	 */
	public static function config(Typecho_Widget_Helper_Form $form){}
	
	/**
	 *个人用户的配置面板 
	 * 
	 * @access public
	 * @param  Typeecho_Widget_Helper_Form $form
	 * @return void
	 * 
	 */
	public static function personalConfig(Typecho_Widget_Helper_Form $form){}
	
	/**
	 *插件实现方法 
	 * 
	 * @access public
	 * @return void
	 * 
	 */
	     /**
     * 插入顶部CSS
     */
    public static function playerHeader()
    {
		$sdir = Helper::options()->pluginUrl . '/biliplayer/css/bili.css';
        echo <<<EOF
<link rel="stylesheet" type="text/css" href="{$sdir}" />
EOF;
    }
	/*编辑器按钮*/
	public static function biliButton()
    {
        $dir = Helper::options()->pluginUrl . '/biliplayer/js/bili.js';
        echo "<script type=\"text/javascript\" src=\"{$dir}\"></script>";
    }

	/*前端调用*/
	public static function playparse($text = '', $widget, $lastResult)
	{
		$text=empty($lastResult) ? $text : $lastResult;
		if($widget instanceof Widget_Archive)
		{
			$regg = '/\[bilibili bv="(.+?)" p="(.+?)"]/sm';
			if( preg_match($regg, $text) ){
					
				$replacement = '<div class="embed-biliplayer"><iframe class="iframe_video" src="//player.bilibili.com/player.html?bvid=$1&page=$2?auto=0&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts" autoplay="false" autostart="false"> </iframe></div>';
				$text=preg_replace($regg,$replacement,$text);
			}
			
		}
		return $text;
	}
}
