package com.mycoms.tumiza;

import com.mycoms.tumiza.config.AsyncSyncConfiguration;
import com.mycoms.tumiza.config.EmbeddedElasticsearch;
import com.mycoms.tumiza.config.EmbeddedSQL;
import com.mycoms.tumiza.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { TumizaApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedElasticsearch
@EmbeddedSQL
public @interface IntegrationTest {
}
