package com.test.repository.search;

import com.test.domain.Image;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Image entity.
 */
public interface ImageSearchRepository extends ElasticsearchRepository<Image, Long> {
}
