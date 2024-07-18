package pitech.trust.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.stereotype.Service;
import pitech.trust.model.User;
import pitech.trust.repository.UserRepository;

import java.util.List;
import java.util.Optional;


import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2UserAuthority;
import org.springframework.stereotype.Service;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;

import java.util.HashSet;
import java.util.Set;


//@Service
public class AuthService {//implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {
//
//        @Override
//        public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
//            // Use the OAuth2AccessToken to make requests to the OAuth2 provider's UserInfo endpoint
//            OAuth2AccessToken accessToken = userRequest.getAccessToken();
//
//            // Example: Fetch user details from Google's UserInfo endpoint
//            // Replace with your actual implementation to fetch user info from the provider
//            String userInfoUri = userRequest.getClientRegistration().getProviderDetails().getUserInfoEndpoint().getUri();
//            // Use RestTemplate to make a request to the UserInfo endpoint and retrieve user attributes
//            // Example:
//        /*
//        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(userInfoUri, HttpMethod.GET,
//            new HttpEntity<>(createHeaders(accessToken)),
//            new ParameterizedTypeReference<Map<String, Object>>() {});
//        Map<String, Object> userAttributes = response.getBody();
//        */
//
//            // For demonstration, creating a mock OAuth2User object
//            Set<GrantedAuthority> authorities = new HashSet<>();
//            authorities.add(new OAuth2UserAuthority("ROLE_USER","Admin"));
//            OAuth2User oauth2User = new DefaultOAuth2User(authorities, userAttributes, "sub");
//
//            return oauth2User;
//        }
    }

